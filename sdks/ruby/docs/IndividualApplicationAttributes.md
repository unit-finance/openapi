# UnitFinanceSdk::IndividualApplicationAttributes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. |  |
| **message** | **String** | A message describing the IndividualApplication status. |  |
| **created_at** | **Time** | The date the resource was created. |  |
| **updated_at** | **Time** | Optional. The date the resource was updated. | [optional] |
| **ssn** | **String** | SSN of the individual (numbers only). Either ssn or passport will be populated. | [optional] |
| **passport** | **String** | Individual passport number. Either ssn or passport will be populated. | [optional] |
| **nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the individual nationality (e.g. \&quot;US\&quot;). | [optional] |
| **full_name** | [**FullNameType**](FullNameType.md) | Full name of the individual. |  |
| **date_of_birth** | **Date** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
| **address** | [**AddressType**](AddressType.md) | Address of the individual. |  |
| **phone** | [**PhoneType**](PhoneType.md) | Phone of the individual. |  |
| **email** | **String** | Email address of the individual. |  |
| **ip** | **String** | IP address of the end-customer creating the application, if specified. | [optional] |
| **sole_proprietorship** | **Boolean** | Optional. Indicates whether the individual is a sole proprietor, if specified. | [optional] |
| **ein** | **String** | Optional. Indicates if the individual is a sole proprietor who has an Employer Identification Number, if specified. | [optional] |
| **industry** | [**IndustryType**](IndustryType.md) | Optional. Indicates if the individual is a sole proprietor who has a business industry, if specified. | [optional] |
| **dba** | **String** | Optional. Indicates if the individual is a sole proprietor who is doing business under a different name, if specified. | [optional] |
| **archived** | **Boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. Once an application has been archived, a new application with the same SSN (or Passport) may be submitted. An application becomes archived once the corresponding customer is archived. |  |
| **id_theft_score** | **Float** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). | [optional] |
| **tags** | **Hash&lt;String, Object&gt;** | See Tags. |  |

## Example

```ruby
require 'unit_finance_sdk'

instance = UnitFinanceSdk::IndividualApplicationAttributes.new(
  status: null,
  message: null,
  created_at: null,
  updated_at: null,
  ssn: null,
  passport: null,
  nationality: null,
  full_name: null,
  date_of_birth: null,
  address: null,
  phone: null,
  email: null,
  ip: null,
  sole_proprietorship: null,
  ein: null,
  industry: null,
  dba: null,
  archived: null,
  id_theft_score: null,
  tags: null
)
```

