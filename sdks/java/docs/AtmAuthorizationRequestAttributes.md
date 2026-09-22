

# AtmAuthorizationRequestAttributes


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **OffsetDateTime** | The date the resource was created. |  |
|**amount** | **Integer** | The amount (cents) of the authorization request. |  |
|**status** | **String** | The status of the authorization request. |  |
|**outcome** | **String** | What your programmatic integration produced when the request reached a terminal decision. See Understanding authorization decisions. |  [optional] |
|**direction** | **String** | The direction of the transaction (Credit or Debit). |  |
|**atmName** | **String** | The name of the ATM. |  |
|**atmLocation** | **String** | The location of the ATM. |  |
|**surcharge** | **Integer** | The surcharge amount in cents. |  |
|**tags** | **Map&lt;String, Object&gt;** | See Tags. When the authorization request was auto-completed using the timeout strategy, this field may also contain decision_source and timeout_strategy; prefer the outcome attribute for new integrations. |  |



