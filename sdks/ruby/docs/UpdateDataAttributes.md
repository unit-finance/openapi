# UnitFinanceSdk::UpdateDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clearing_days_override** | **Float** | See Dynamic Clearing Period. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::UpdateDataAttributes.new(
  clearing_days_override: null,
  tags: {&quot;by&quot;:&quot;Richard Hendricks&quot;,&quot;id&quot;:&quot;23033b64-38f8-4dbc-91a1-313ff0156d02&quot;}
)
```

