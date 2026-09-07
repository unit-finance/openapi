

# CreateCard201ResponseData


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**IndividualVirtualDebitCardAttributes**](IndividualVirtualDebitCardAttributes.md) |  |  |
|**relationships** | [**CashDepositBarcodeRelationships**](CashDepositBarcodeRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| BUSINESS_CREDIT_CARD | &quot;businessCreditCard&quot; |
| BUSINESS_DEBIT_CARD | &quot;businessDebitCard&quot; |
| BUSINESS_VIRTUAL_CREDIT_CARD | &quot;businessVirtualCreditCard&quot; |
| BUSINESS_VIRTUAL_DEBIT_CARD | &quot;businessVirtualDebitCard&quot; |
| INDIVIDUAL_DEBIT_CARD | &quot;individualDebitCard&quot; |
| INDIVIDUAL_VIRTUAL_DEBIT_CARD | &quot;individualVirtualDebitCard&quot; |



