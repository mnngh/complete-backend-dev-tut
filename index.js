require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const githubData = {
  login: 'mnngh',
  id: 97261289,
  node_id: 'U_kgDOBcwW6Q',
  avatar_url: 'https://avatars.githubusercontent.com/u/97261289?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mnngh',
  html_url: 'https://github.com/mnngh',
  followers_url: 'https://api.github.com/users/mnngh/followers',
  following_url: 'https://api.github.com/users/mnngh/following{/other_user}',
  gists_url: 'https://api.github.com/users/mnngh/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mnngh/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mnngh/subscriptions',
  organizations_url: 'https://api.github.com/users/mnngh/orgs',
  repos_url: 'https://api.github.com/users/mnngh/repos',
  events_url: 'https://api.github.com/users/mnngh/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mnngh/received_events',
  type: 'User',
  site_admin: false,
  name: 'Mohammed Nur Nabi',
  company: 'Majorel',
  blog: '',
  location: 'Jeddah, Saudi Arabia',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 23,
  public_gists: 4,
  followers: 0,
  following: 12,
  created_at: '2022-01-06T22:43:48Z',
  updated_at: '2024-03-01T00:11:12Z',
};

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/twitter', (req, res) => {
  res.send('mnndotcom');
});

app.get('/login', (req, res) => {
  res.send(`<h1>Please login at chai aur code</h1>`);
});

app.get('/mnn', (req, res) => {
  res.send('hello mr nur');
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app is listening on port ${port}`);
});
