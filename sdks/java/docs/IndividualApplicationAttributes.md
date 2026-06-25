

# IndividualApplicationAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | **String** | One of AwaitingDocuments, PendingReview, Approved, Denied or Pending, see Application Statuses. |  |
|**message** | **String** | A message describing the IndividualApplication status. |  |
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**updatedAt** | **OffsetDateTime** | Optional. The date the resource was updated. |  [optional] |
|**ssn** | **String** | SSN of the individual (numbers only). Either ssn or passport will be populated. |  [optional] |
|**passport** | **String** | Individual passport number. Either ssn or passport will be populated. |  [optional] |
|**nationality** | **String** | Always when Passport is populated and optional when SSN is populated. Two letters representing the individual nationality (e.g. \&quot;US\&quot;). |  [optional] |
|**fullName** | [**FullName**](FullName.md) | Full name of the individual. |  |
|**dateOfBirth** | **LocalDate** | Date only (e.g. \&quot;2001-08-15\&quot;). |  |
|**address** | [**Address**](Address.md) | Address of the individual. |  |
|**phone** | [**Phone**](Phone.md) | Phone of the individual. |  |
|**email** | **String** | Email address of the individual. |  |
|**ip** | **String** | IP address of the end-customer creating the application, if specified. |  [optional] |
|**soleProprietorship** | **Boolean** | Optional. Indicates whether the individual is a sole proprietor, if specified. |  [optional] |
|**ein** | **String** | Optional. Indicates if the individual is a sole proprietor who has an Employer Identification Number, if specified. |  [optional] |
|**industry** | **Industry** | Optional. Indicates if the individual is a sole proprietor who has a business industry, if specified. |  [optional] |
|**dba** | **String** | Optional. Indicates if the individual is a sole proprietor who is doing business under a different name, if specified. |  [optional] |
|**archived** | **Boolean** | Indicates whether the application has been archived. Archived applications are read-only and no changes can be made to them. Once an application has been archived, a new application with the same SSN (or Passport) may be submitted. An application becomes archived once the corresponding customer is archived. |  |
|**idTheftScore** | **BigDecimal** | Optional. Score (0-1000) for ID theft verification, &gt;900 is auto rejected as default (threshold is configurable). |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  |



