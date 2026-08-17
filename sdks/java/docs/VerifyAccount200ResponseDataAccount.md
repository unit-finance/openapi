

# VerifyAccount200ResponseDataAccount

Present when exists is true. Same shape as GET /accounts/:id. May be any account type (e.g. depositAccount, walletAccount).

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



