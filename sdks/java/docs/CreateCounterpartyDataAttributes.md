

# CreateCounterpartyDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** | The account holder&#39;s name (whether an individual or a business, maximum of 50 characters). |  |
|**routingNumber** | **String** | Valid 9-digit ABA routing transit number. |  |
|**accountNumber** | **String** | Bank account number. |  |
|**accountType** | **String** | (defaults to checking). Either Checking, Savings or Loan. |  |
|**type** | **String** | Either Business, Person or Unknown. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**permissions** | **String** | Optional, custom counterparty permissions. Only DebitOnly or CreditAndDebit are valid values when using the permissions&#39; attribute. &#39;CreditOnly&#39; will be assigned as default value when permissions attribute is not declared. If the account and routing number of the counterparty belong to an account under your org on Unit, you may specify \&quot;CreditAndDebit\&quot; or \&quot;DebitOnly\&quot; permissions as well. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



