

# CreateCounterpartyWithPlaidTokenDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | **String** | Either Business, Person or Unknown |  |
|**name** | **String** | The account holder&#39;s name (whether an individual or a business). |  |
|**plaidProcessorToken** | **String** | Plaid integration token&lt;br /&gt;See Plaid processor token |  |
|**verifyName** | **Boolean** | Optional, default to false. Verify a match between the name of the counterparty and the name of the external account&#39;s owner as provided by Plaid. If the name verification fails the request will fail with code field set to NameVerificationFailed. |  [optional] |
|**permissions** | **String** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. Default is CreditAndDebit. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |
|**idempotencyKey** | **String** | See Idempotency. |  [optional] |



