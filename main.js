import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const checkMaliciousDependencies = (src, des) => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const srcPath = path.join(__dirname, src);
  const desPath = path.join(__dirname, des);

  const vulnerabilities = [];
  const pkg = [];


  const data = fs.readFileSync(srcPath, "utf-8");
  const despkg = fs.readFileSync(desPath, "utf-8");

  try {
  data.split("\n").forEach(line => {
    const trimmedLine = line.trim();
        if (trimmedLine) {
            vulnerabilities.push(trimmedLine);
        }
    });
  } catch (err) {
    console.error(err);
  }

const pkgJson = JSON.parse(despkg);

if (pkgJson.dependencies) {
    for (const dep in pkgJson.dependencies) {
      pkg.push(dep);
    }
  }

  if (pkgJson.devDependencies) {
    for (const devDep in pkgJson.devDependencies) {
      pkg.push(devDep);
    }
  }

const vulnerabilitiesFounded = pkg.filter(dep =>
    vulnerabilities.some(vuln => dep.includes(vuln) || vuln.includes(dep)));

return vulnerabilitiesFounded;

};


console.log(checkMaliciousDependencies('vulnerabilities.txt', 'package.json'));