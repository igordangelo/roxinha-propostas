# Gerador de Propostas Roxinha ComproPay

Aplicação estática para o time comercial gerar propostas personalizadas em PDF a partir dos layouts oficiais da Roxinha ComproPay.

## Acesso

- Usuário padrão: `comercial`
- Senha padrão: `Roxinha@2026`

Importante: esta proteção é uma trava de front-end para evitar acesso aberto em hospedagem estática. Não substitui autenticação com backend.

## Como usar

Abra a aplicação, faça login, preencha todos os campos obrigatórios e clique em **Gerar proposta em PDF**.

Para rodar localmente:

```bash
python -m http.server 5173
```

Depois acesse:

```text
http://127.0.0.1:5173
```

## Estrutura

- `assets/pages/d1` contém as páginas oficiais da proposta D+1.
- `assets/pages/d30` contém as páginas oficiais da proposta D+30.
- `app.js` controla formulário, autenticação leve, prévia e geração do PDF.
- `index.html` contém a tela de login e a interface do gerador.
- `styles.css` concentra o visual da plataforma.

## Publicação

O repositório já inclui workflow para GitHub Pages em `.github/workflows/deploy-pages.yml`.
