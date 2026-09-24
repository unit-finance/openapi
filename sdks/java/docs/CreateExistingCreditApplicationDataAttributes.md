

# CreateExistingCreditApplicationDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**aggregatorAccessTokens** | **List&lt;String&gt;** | Array of aggregator access tokens which are Plaid (or other account linking platform) integration tokens. See Plaid processor token |  [optional] |
|**annualIncome** | **Integer** | The annual income of the applicant. |  [optional] |
|**numberOfEmployees** | **BusinessNumberOfEmployeesType** | Number of employees of the business. |  [optional] |
|**yearsInBusiness** | **Integer** | Number of years the business has been in operation. |  [optional] |
|**additionalUnderwritingData** | **Map&lt;String, Object&gt;** | Object containing key-value pairs of underwriting data per credit policy. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



