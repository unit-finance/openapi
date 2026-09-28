# UnitFinanceSdk::ConfigurePositivePayPolicyDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **opt_in_types** | **Array&lt;String&gt;** | Payment types to opt in. Supported values: CheckPayment, ReceivedAchDebit. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::ConfigurePositivePayPolicyDataAttributes.new(
  opt_in_types: [&quot;CheckPayment&quot;,&quot;ReceivedAchDebit&quot;,&quot;ReceivedAchCredit&quot;]
)
```

