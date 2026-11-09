// All values are deliberately synthetic. Build full patterns at test runtime
// so no credential-like token is committed as a contiguous literal.
export const secretPatternFixtures = [
  { id: "aws-access-key", kind: "aws-access-key", positive: "AKIA" + "A".repeat(16), negative: "AKIA" + "A".repeat(15) },
  { id: "github-token", kind: "github-token", positive: "ghp_" + "A".repeat(20), negative: "ghp_" + "A".repeat(19) },
  { id: "github-fine-grained", kind: "github-fine-grained", positive: "github_pat_" + "A".repeat(20), negative: "github_pat_" + "A".repeat(19) },
  { id: "openai-project-key", kind: "openai-key", positive: "sk-proj-" + "A".repeat(20), negative: "sk-proj-" + "A".repeat(19) },
  { id: "openai-legacy-key", kind: "openai-key", positive: "sk-" + "A".repeat(32), negative: "sk-" + "A".repeat(31) },
  { id: "anthropic-key", kind: "anthropic-key", positive: "sk-ant-" + "A".repeat(20), negative: "sk-ant-" + "A".repeat(19) },
  { id: "stripe-key", kind: "stripe-key", positive: "sk_live_" + "A".repeat(16), negative: "sk_live_" + "A".repeat(15) },
  { id: "stripe-webhook", kind: "stripe-webhook", positive: "whsec_" + "A".repeat(16), negative: "whsec_" + "A".repeat(15) },
  { id: "private-key", kind: "private-key", positive: "-----BEGIN PRIVATE KEY-----", negative: "-----BEGIN PUBLIC KEY-----" },
  { id: "slack-token", kind: "slack-token", positive: "xoxb-" + "A".repeat(10), negative: "xoxb-" + "A".repeat(9) },
  { id: "slack-webhook", kind: "slack-webhook", positive: "https://hooks.slack.com/services/" + "A".repeat(10), negative: "https://hooks.slack.com/services/short" },
  { id: "google-api-key", kind: "google-api-key", positive: "AIza" + "A".repeat(35), negative: "AIza" + "A".repeat(34) },
  { id: "telegram-bot-token", kind: "telegram-bot-token", positive: "12345678:" + "A".repeat(35), negative: "12345678:" + "A".repeat(34) },
  { id: "npm-token", kind: "npm-token", positive: "npm_" + "A".repeat(36), negative: "npm_" + "A".repeat(35) },
] as const;
