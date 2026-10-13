# UnitFinanceSdk::AddAuthorizedUsersDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **authorized_users** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will be added to the existing ones. |  |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::AddAuthorizedUsersDataAttributes.new(
  authorized_users: [{&quot;fullName&quot;:{&quot;first&quot;:&quot;Erlich&quot;,&quot;last&quot;:&quot;Backman&quot;},&quot;email&quot;:&quot;erlich@piedpiper.com&quot;,&quot;phone&quot;:{&quot;countryCode&quot;:&quot;1&quot;,&quot;number&quot;:&quot;1234567890&quot;},&quot;canConnectWithAuthVendor&quot;:true}]
)
```

