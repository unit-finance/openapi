# UnitFinanceSdk::CreateBusinessWalletCustomerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **bank_name** | **String** | The name of the bank partner this customer is about to create a wallet under. |  |
| **business_name** | **String** | The name of the business this customer represents. |  |
| **address** | [**AddressType**](AddressType.md) | Address of the business. |  |
| **ein** | **String** | Business EIN (numbers only). |  |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. |  |
| **number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | The number of employees working for this business. |  |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::CreateBusinessWalletCustomerDataAttributes.new(
  bank_name: myBankName,
  business_name: Sirius &amp; Snape Inc.,
  address: null,
  ein: 123456789,
  business_vertical: null,
  number_of_employees: null,
  tags: {&quot;purpose&quot;:&quot;Sirius &amp; Snape Inc.&quot;}
)
```

