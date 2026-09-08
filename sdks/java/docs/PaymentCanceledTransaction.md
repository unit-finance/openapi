

# PaymentCanceledTransaction

The transaction represents an originated ACH that has been canceled by its originator prior to its transmission to the ACH network.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**CheckDepositTransactionAttributes**](CheckDepositTransactionAttributes.md) |  |  |
|**relationships** | [**PaymentCanceledTransactionRelationships**](PaymentCanceledTransactionRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| PAYMENT_CANCELED_TRANSACTION | &quot;paymentCanceledTransaction&quot; |



