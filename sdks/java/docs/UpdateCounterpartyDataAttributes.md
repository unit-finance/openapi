

# UpdateCounterpartyDataAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**plaidProcessorToken** | **String** | Optional, unless updating a Plaid counterparty. Plaid integration token&lt;br /&gt;See Plaid processor token |  [optional] |
|**verifyName** | **Boolean** | Optional, default to false. Verify the name of the counterparty, if the name verification fails the request will fail with code field set to NameVerificationFailed. |  [optional] |
|**permissions** | **String** | Optional, custom counterparty permissions. Either CreditOnly, DebitOnly, CreditAndDebit. |  [optional] |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. |  [optional] |



