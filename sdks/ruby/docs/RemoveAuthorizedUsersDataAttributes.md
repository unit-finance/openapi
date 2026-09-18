# UnitFinanceSdk::RemoveAuthorizedUsersDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **authorized_users_emails** | **Array&lt;String&gt;** | The list of authorized users emails to remove from the customer. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::RemoveAuthorizedUsersDataAttributes.new(
  authorized_users_emails: [&quot;jared@piedpiper.com&quot;]
)
```

