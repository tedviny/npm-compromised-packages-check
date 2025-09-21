Suite à l'annonce de la compromission de certaines dépendances de npm `
Shai-Hulud npm supply chain attack – new compromised packages detected`. Ce petit projet est proposé pour vérifier si vos dépendances incluses dans le fichier package.json font partie de la liste des dépendances vulnérables.

# Utilisation

1. Cloner le projet
2. Mettre à jour le fichier vulnerabilities.txt par rapport à la liste des vulnérabilités publiées et le placer dans l'arborescence du projet.
3. Lancer dans le terminal, la commande `node main`.
4. Observer la liste qui est renvoyée. Si la liste est vide vous n'avez a priori pas de dépendances vulnérables. Sinon vos dépendances vulnérables sont présentes dans la liste.

[Shai-Hulud npm supply chain attack – new compromised packages detected](https://jfrog.com/blog/shai-hulud-npm-supply-chain-attack-new-compromised-packages-detected/).
