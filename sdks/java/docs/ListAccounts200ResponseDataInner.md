

# ListAccounts200ResponseDataInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**WalletAccountAttributes**](WalletAccountAttributes.md) |  |  |
|**relationships** | [**CreditAccountRelationships**](CreditAccountRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DEPOSIT_ACCOUNT | &quot;depositAccount&quot; |
| CREDIT_ACCOUNT | &quot;creditAccount&quot; |
| WALLET_ACCOUNT | &quot;walletAccount&quot; |



