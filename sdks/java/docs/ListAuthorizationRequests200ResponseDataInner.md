

# ListAuthorizationRequests200ResponseDataInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**AtmAuthorizationRequestAttributes**](AtmAuthorizationRequestAttributes.md) |  |  |
|**relationships** | [**AtmAuthorizationRequestRelationships**](AtmAuthorizationRequestRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PURCHASE_AUTHORIZATION_REQUEST | &quot;purchaseAuthorizationRequest&quot; |
| CARD_TRANSACTION_AUTHORIZATION_REQUEST | &quot;cardTransactionAuthorizationRequest&quot; |
| ATM_AUTHORIZATION_REQUEST | &quot;atmAuthorizationRequest&quot; |



