# Security Policy

## Supported Versions

This is a personal portfolio website built with Jekyll and hosted on GitHub Pages. Security updates are applied as they become available through the `github-pages` gem.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio website, please report it by:

1. **Email**: Send details to [aritra.roy.g@gmail.com](mailto:aritra.roy.g@gmail.com)
2. **GitHub Issues**: For non-critical issues, you may open a GitHub issue

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

### Response Time

- Critical vulnerabilities: Response within 48 hours
- Non-critical issues: Response within 1 week

### Disclosure Policy

Please allow reasonable time for the issue to be addressed before public disclosure. Security fixes will be applied as soon as possible and acknowledged in the commit history.

## Security Best Practices

This portfolio implements:
- Content Security Policy via `<meta http-equiv="Content-Security-Policy">`
- Strict referrer policy
- HTTPS hosting on GitHub Pages
- No server-side code execution
- Dependency updates via Bundler / `github-pages`

Thank you for helping keep this portfolio secure!
