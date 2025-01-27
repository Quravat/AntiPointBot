# 🚫 Anti-Feur Bot

Bienvenue sur **Anti-Feur Bot** ! 🎉 Ce bot Discord a pour objectif de créer un environnement plus respectueux en empêchant l'utilisation du mot "feur" dans les messages envoyés sur les serveurs où il est installé. Il répond automatiquement aux utilisateurs qui essaient d'utiliser ce mot avec un message poli pour les avertir. 🌟

## ✨ Fonctionnalités

- **Filtrage des messages** : Détecte et bloque l'utilisation du mot "feur" dans les messages.
- **Réponse polie** : Envoie un message à l'utilisateur qui utilise le mot "feur" pour lui notifier que c'est inapproprié.
- **Personnalisable** : Vous pouvez facilement ajouter ou modifier le mot à filtrer dans le code.

## 🔧 Technologies Utilisées

- **Node.js** – Le langage principal utilisé.
- **Discord.js** – Pour interagir avec l'API de Discord.
- **JavaScript** – Pour la logique et la gestion des messages.

## 🛠️ Installation et Utilisation

### Prérequis

Assurez-vous d'avoir **Node.js** installé sur votre système. Si ce n'est pas le cas, téléchargez et installez-le depuis le [site officiel de Node.js](https://nodejs.org/).

### Étapes d'Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Quravat/AntiPointBot.git
   cd AntiPointBot
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install discord.js
   ```

3. Remplacez `'token'` dans le code par le token de votre propre bot Discord.

### Comment Lancer

1. Démarrez le bot :
   ```bash
   node index.js
   ```

2. Le bot se connectera et commencera à surveiller les messages contenant le mot "feur."

## 📝 Fonctionnement

- **API Discord.js** : Le bot utilise la bibliothèque Discord.js pour écouter les messages sur les serveurs.
- **Filtrage des messages** : Dès qu'un message contient le mot "feur", le bot envoie un avertissement poli à l'utilisateur.
- **Intents et Partials** : Le bot utilise des intents spécifiques pour surveiller les messages et des partials pour s'assurer qu'il peut gérer les messages incomplets.

## 🤝 Contribuer

Nous accueillons toutes les contributions pour améliorer ce bot ! Si vous souhaitez ajouter des fonctionnalités ou signaler des bugs, suivez ces étapes :

1. Forkez ce dépôt.
2. Créez une nouvelle branche (`feature-branch`).
3. Commitez vos changements.
4. Poussez sur votre dépôt forké.
5. Créez une pull request.

## 💬 Questions ou Retours ?

N'hésitez pas à ouvrir une issue si vous avez des questions ou des retours. Vos contributions sont très appréciées !

## 📝 Crédits

- **Développeur** : Quravat 💻  
- **Créé en** : 2025 🗓️  

## ❤️ Contribuez au Projet !

N'hésitez pas à ouvrir des issues ou soumettre des pull requests. Toutes les contributions sont les bienvenues ! 🙌  
Si ce projet vous est utile, merci de **l'étoiler** sur GitHub ⭐ – votre soutien compte beaucoup pour moi !  
