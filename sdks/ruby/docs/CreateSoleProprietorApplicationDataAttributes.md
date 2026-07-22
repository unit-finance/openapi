# UnitFinanceSdk::CreateSoleProprietorApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ssn** | **String** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. | [optional] |
| **passport** | **String** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] |
| **nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the individual. |  |
| **date_of_birth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | Address of the individual. Must be a US address. |  |
| **phone** | [**PhoneType**](PhoneType.md) | Phone number of the individual. |  |
| **email** | **String** | Email address of the individual. |  |
| **sole_proprietorship** | **Boolean** | Set this to true in order to indicate that the individual is a sole proprietor. |  |
| **ein** | **String** | Optional. If the individual is a sole proprietor who has an Employer Identification Number, specify it here. Not all sole proprietors have an EIN, so this attribute is optional, even when soleProprietorship is set to true. | [optional] |
| **dba** | **String** | Optional. If the individual is a sole proprietor who is doing business under a different name, specify it here. This attribute is optional, even when soleProprietorship is set to true. | [optional] |
| **evaluation_params** | **String** | Optional. Evaluation Params for this entity. | [optional] |
| **annual_revenue** | [**SoleProprietorAnnualRevenueType**](SoleProprietorAnnualRevenueType.md) | Required if nationality is not US. For sole proprietors, specify the annual revenue here. |  |
| **number_of_employees** | [**SoleProprietorNumberOfEmployeesType**](SoleProprietorNumberOfEmployeesType.md) | Required if nationality is not US. For sole proprietors, specify the number of employees here. |  |
| **business_vertical** | [**BusinessVerticalType**](BusinessVerticalType.md) | For sole proprietors, specify the business vertical here. |  |
| **website** | **String** | A Valid website Url. Providing a null value is indicative of the business customer attesting that they do not have a website. |  |
| **ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **device_fingerprints** | [**Array&lt;DeviceFingerprintType&gt;**](DeviceFingerprintType.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] |
| **jwt_subject** | **String** | Optional. See this section for more information. | [optional] |
| **banks** | **Array&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] |
| **requested_products** | [**Array&lt;RequestedProductType&gt;**](RequestedProductType.md) | Optional. The product being applied for. Contact Unit to enable BillPay and Capital products. | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateSoleProprietorApplicationDataAttributes.new(
  ssn: 721074426,
  passport: null,
  nationality: null,
  full_name: null,
  date_of_birth: 2001-08-10,
  address: null,
  phone: null,
  email: peter@oscorp.com,
  sole_proprietorship: true,
  ein: 123456789,
  dba: Piedpiper Inc,
  evaluation_params: null,
  annual_revenue: null,
  number_of_employees: null,
  business_vertical: null,
  website: https://www.piedpiper.com,
  ip: 127.0.0.2,
  tags: {&quot;userId&quot;:&quot;106a75e9-de77-4e25-9561-faffe59d7814&quot;},
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  device_fingerprints: null,
  jwt_subject: null,
  banks: null,
  requested_products: null
)
```

