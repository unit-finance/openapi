# UnitFinanceSdk::BusinessWalletCustomerAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at** | **Time** | The date the resource was created. |  |
| **bank_name** | **String** | The name of the bank partner this customer is about to create a wallet under. |  |
| **business_name** | **String** | The name of the business this customer represents. |  |
| **name** | **String** | The official name. |  |
| **address** | [**AddressType**](AddressType.md) | Address of the business. |  |
| **ein** | **String** | Business EIN (numbers only). |  |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | The business vertical of the business. |  |
| **number_of_employees** | [**NumberOfEmployeesType**](NumberOfEmployeesType.md) | The number of employees working for this business. |  |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::BusinessWalletCustomerAttributes.new(
  created_at: null,
  bank_name: null,
  business_name: null,
  name: null,
  address: null,
  ein: null,
  business_vertical: null,
  number_of_employees: null,
  tags: null
)
```

