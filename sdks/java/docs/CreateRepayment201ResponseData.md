

# CreateRepayment201ResponseData


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) |  |  |
|**id** | **String** |  |  |
|**attributes** | [**ExternalRepaymentAttributes**](ExternalRepaymentAttributes.md) |  |  |
|**relationships** | [**ExternalRepaymentRelationships**](ExternalRepaymentRelationships.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| ACH_REPAYMENT | &quot;achRepayment&quot; |
| BOOK_REPAYMENT | &quot;bookRepayment&quot; |
| CAPITAL_PARTNER_ACH_REPAYMENT | &quot;capitalPartnerAchRepayment&quot; |
| CAPITAL_PARTNER_BOOK_REPAYMENT | &quot;capitalPartnerBookRepayment&quot; |
| EXTERNAL_REPAYMENT | &quot;externalRepayment&quot; |



