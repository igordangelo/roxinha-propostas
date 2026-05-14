# Gerador de Propostas Roxinha ComproPay

Aplicação estática para consultores comerciais gerarem PDF personalizado da proposta da Roxinha ComproPay usando os PDFs oficiais limpos como template.

## Como usar

Rode em uma hospedagem estática ou servidor local, preencha os dados do cliente, escolha o tipo de proposta e clique em **Gerar PDF**.

Em desenvolvimento local:

```bash
python -m http.server 5173
```

Depois acesse `http://localhost:5173`.

## Regras implementadas

- Proposta D+1 usa `assets/modelo-d1.pdf`.
- Proposta D+30 usa `assets/modelo-d30.pdf`.
- A página de antecipação só existe no template D+30.
- Cliente, média de faturamento, PIX, taxas e consultor entram direto no PDF oficial.

## Hospedagem gratuita

Funciona em hospedagem estática gratuita, como GitHub Pages, Netlify ou Vercel. Para GitHub Pages, suba estes arquivos em um repositório público e ative **Settings > Pages > Deploy from branch**.
