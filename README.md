# Deliberately Vulnerable Sample App

⚠️ **This code is intentionally insecure.** It exists to demonstrate the
[Offensive360 SAST scan action](https://github.com/offensive360/sast-scan-action)
— do not copy any of it into real projects, and never deploy it.

## What this repo shows

Every push to `main` runs the workflow in
[`.github/workflows/sast.yml`](.github/workflows/sast.yml):

1. `offensive360/sast-scan-action@v1` uploads the source to an Offensive360
   instance and runs a full SAST scan (60+ languages supported).
2. The results come back as SARIF and are uploaded to the
   [**Security → Code scanning**](../../security/code-scanning) tab —
   SQL injection, OS command injection, arbitrary code execution and friends,
   each with file/line, impact, and remediation guidance.
3. The job summary shows the severity breakdown per run.

The vulnerable code lives in [`src/`](src/): a PHP data-access file and a small
Node HTTP server, each with classic injection and code-execution flaws.

## Run this on your own repository

```yaml
- uses: offensive360/sast-scan-action@v1
  with:
    api-url: https://sast.offensive360.com
    api-token: ${{ secrets.O360_API_TOKEN }}
    upload-sarif: 'true'
    fail-on: high
```

**Open-source projects scan free** — request a token at
[offensive360.com/free-for-open-source](https://offensive360.com/free-for-open-source/).

## License

MIT — see [LICENSE](LICENSE). The vulnerabilities are the point; treat the code
as radioactive anyway.
