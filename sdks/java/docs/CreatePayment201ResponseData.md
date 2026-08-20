

# CreatePayment201ResponseData


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**WirePaymentAttributes**](WirePaymentAttributes.md) |  |  |
|**relationships** | [**WirePaymentRelationships**](WirePaymentRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| ACH_PAYMENT | &quot;achPayment&quot; |
| BOOK_PAYMENT | &quot;bookPayment&quot; |
| WIRE_PAYMENT | &quot;wirePayment&quot; |



