# UnitFinanceSdk::UpdateIndividualCustomerDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **address** | [**AddressType**](AddressType.md) | Address of the individual. To modify or add specify the new address. | [optional] |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. To modify or add specify the new phone number. | [optional] |
| **email** | **String** | Email address of the individual. To modify or add specify the new email address. | [optional] |
| **dba** | **String** | If the individual is a sole proprietor who is doing business under a different name. To modify or add specify the new dba name. | [optional] |
| **number_of_employees** | [**BusinessNumberOfEmployeesType**](BusinessNumberOfEmployeesType.md) | Number of employees if the customer is a sole proprietor. | [optional] |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | Business vertical if the customer is a sole proprietor. | [optional] |
| **occupation** | [**OccupationType**](OccupationType.md) | Occupation of the individual. | [optional] |
| **annual_income** | [**AnnualIncomeType**](AnnualIncomeType.md) | Annual income of the individual. | [optional] |
| **annual_revenue** | [**AnnualRevenueType**](AnnualRevenueType.md) | Annual revenue if the customer is a sole proprietor. | [optional] |
| **website** | **String** | Business&#39;s website if the customer is a sole proprietor. | [optional] |
| **source_of_income** | [**SourceOfIncomeType**](SourceOfIncomeType.md) | Source of income of the individual. | [optional] |
| **authorized_users** | [**Array&lt;AuthorizedUserType&gt;**](AuthorizedUserType.md) | Array of authorized users. The provided array items will replace the existing ones. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Updating Tags. | [optional] |
| **jwt_subject** | **String** | See this section for more information. | [optional] |

## Example

```ruby
require 'unit_openapi_ruby_sdk'

instance = UnitFinanceSdk::UpdateIndividualCustomerDataAttributes.new(
  address: null,
  phone: null,
  email: richard@piedpiper.com,
  dba: null,
  number_of_employees: null,
  business_vertical: null,
  occupation: null,
  annual_income: null,
  annual_revenue: null,
  website: https://piedpiper.com,
  source_of_income: null,
  authorized_users: null,
  tags: null,
  jwt_subject: null
)
```

