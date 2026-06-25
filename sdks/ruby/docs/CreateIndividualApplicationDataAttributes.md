# UnitFinanceSdk::CreateIndividualApplicationDataAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **ssn** | **String** | SSN (or ITIN) of the individual (numbers only). Either an ssn or passport is required. It is optional to provide only last 4 SSN digits. | [optional] |
| **passport** | **String** | Passport number of the individual. Valid only for non-US persons. Either an ssn or passport number is required. | [optional] |
| **nationality** | **String** | Required if a passport is used as the main ID. Two letters representing the individual nationality. (e.g. \&quot;US\&quot;). | [optional] |
| **full_name** | [**FullName**](FullName.md) | Full name of the individual. |  |
| **date_of_birth** | **String** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**Address**](Address.md) | Address of the individual. Must be a US address. |  |
| **phone** | [**Phone**](Phone.md) | Phone number of the individual. |  |
| **email** | **String** | Email address of the individual. |  |
| **evaluation_params** | **String** | Optional. Evaluation Params for this entity. | [optional] |
| **occupation** | [**Occupation**](Occupation.md) | Occupation of the individual. |  |
| **annual_income** | [**AnnualIncome**](AnnualIncome.md) | Required if nationality is not US. Annual income of the individual. |  |
| **source_of_income** | [**SourceOfIncome**](SourceOfIncome.md) | Required if nationality is not US. Source of income of the individual. |  |
| **ip** | **String** | Optional. IP address of the end-customer creating the application. Both IPv4 and IPv6 formats are supported. Highly recommended as a fraud prevention measure, if the information is available when submitting the application. | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | Optional. See Tags. Tags that will be copied to the customer that this application creates (see Tag Inheritance). | [optional] |
| **idempotency_key** | **String** | Optional. See Idempotency. | [optional] |
| **device_fingerprints** | [**Array&lt;DeviceFingerprint&gt;**](DeviceFingerprint.md) | Optional. A list of device fingerprints for fraud and risk prevention (See Device Fingerprints). | [optional] |
| **jwt_subject** | **String** | Optional. See this section for more information. | [optional] |
| **banks** | **Array&lt;String&gt;** | Optional. The name of the bank or banks that should be associated with this application. If not specified, the application will be associated with the Org&#39;s default bank (visible via Org Settings in the Dashboard). | [optional] |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::CreateIndividualApplicationDataAttributes.new(
  ssn: 721074426,
  passport: null,
  nationality: null,
  full_name: null,
  date_of_birth: 2001-08-10,
  address: null,
  phone: null,
  email: peter@oscorp.com,
  evaluation_params: null,
  occupation: null,
  annual_income: null,
  source_of_income: null,
  ip: 127.0.0.2,
  tags: {&quot;userId&quot;:&quot;106a75e9-de77-4e25-9561-faffe59d7814&quot;},
  idempotency_key: 3a1a33be-4e12-4603-9ed0-820922389fb8,
  device_fingerprints: null,
  jwt_subject: null,
  banks: null
)
```

