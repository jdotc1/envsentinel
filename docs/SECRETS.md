# Built-in secret patterns

`envsentinel scan` reports file, line, and detector kind, never the matched value.
The regression fixtures in `tests/fixtures/secrets/patterns.ts` construct
obviously fake values and include a shorter or malformed near-miss for every
built-in expression. No real credentials are used.

| Provider / variant | Reported kind | Expected behavior |
|---|---|---|
| AWS access key ID | `aws-access-key` | Detect `AKIA` plus 16 uppercase letters/digits; reject shorter values. |
| GitHub classic token | `github-token` | Detect `ghp_` and related prefixes plus 20 characters; reject shorter values. |
| GitHub fine-grained token | `github-fine-grained` | Detect `github_pat_` plus 20 characters; reject shorter values. |
| OpenAI project/service-account key | `openai-key` | Detect `sk-proj-` / `sk-svcacct-` plus 20 characters; reject shorter values. |
| OpenAI legacy key | `openai-key` | Detect `sk-` plus 32 alphanumeric characters; reject shorter values. |
| Anthropic API key | `anthropic-key` | Detect `sk-ant-` plus 20 characters; reject shorter values. |
| Stripe API key | `stripe-key` | Detect `sk_live_` or related prefixes plus 16 characters; reject shorter values. |
| Stripe webhook secret | `stripe-webhook` | Detect `whsec_` plus 16 characters; reject shorter values. |
| PEM private key | `private-key` | Detect a private-key opening marker; exclude public-key markers. |
| Slack token | `slack-token` | Detect `xoxb-` or related prefixes plus 10 characters; reject shorter values. |
| Slack webhook | `slack-webhook` | Detect a Slack services webhook with a nontrivial path; reject short paths. |
| Google API key | `google-api-key` | Detect `AIza` plus 35 characters; reject shorter values. |
| Telegram bot token | `telegram-bot-token` | Detect 8–10 digits, a colon, and 35 characters; reject shorter values. |
| npm token | `npm-token` | Detect `npm_` plus 36 characters; reject shorter values. |

This is a heuristic scan, not proof that a repository contains no secrets.
