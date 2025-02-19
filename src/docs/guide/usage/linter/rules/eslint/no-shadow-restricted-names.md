<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# eslint/no-shadow-restricted-names <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Disallow redefine the global variables like 'undefined', 'NaN', 'Infinity', 'eval', 'arguments'.

### Why is this bad?

### Example

```javascript
function NaN() {}

!function (Infinity) {};

var undefined = 5;

try {
} catch (eval) {}
```

## How to use

To **enable** this rule in the CLI or using the config file, you can use:

::: code-group

```bash [CLI]
oxlint --deny no-shadow-restricted-names
```

```json [Config (.oxlintrc.json)]
{
  "rules": {
    "no-shadow-restricted-names": "error"
  }
}
```

:::

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/19fdf8993df7b697b99d9b92a3a546cce7171c42/crates/oxc_linter/src/rules/eslint/no_shadow_restricted_names.rs)
