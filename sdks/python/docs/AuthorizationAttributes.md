# AuthorizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the authorization was created. | 
**amount** | **int** | The amount (cents) of the authorization. | 
**card_last4_digits** | **str** | The last 4 digits of the debit card involved in the authorization. | 
**status** | **str** | One of Authorized, Completed, Canceled, Declined, see Authorization Statuses. | 
**card_decision_source** | **str** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] 
**decline_reason** | **str** | The reason the authorization was declined. Available only when status is Declined | [optional] 
**decline_description** | **str** | A human-readable description providing additional detail about the decline. Only present on some declined authorizations. | [optional] 
**declined_by** | **str** | The entity that declined the authorization. One of Visa, Org, or Unit. Available only when status is Declined. | [optional] 
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] 
**recurring** | **bool** | Indicates whether the authorization is recurring | 
**payment_method** | **str** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] 
**digital_wallet** | **str** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] 
**card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] 
**card_network** | **str** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). | 
**cash_withdrawal_amount** | **int** | Cash withdrawal amount | [optional] 
**summary** | **str** | Summary of the authorization. | [optional] 
**rich_merchant_data** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. | [optional] 
**currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD | [optional] 

## Example

```python
from unit_finance_sdk.models.authorization_attributes import AuthorizationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationAttributes from a JSON string
authorization_attributes_instance = AuthorizationAttributes.from_json(json)
# print the JSON string representation of the object
print(AuthorizationAttributes.to_json())

# convert the object into a dict
authorization_attributes_dict = authorization_attributes_instance.to_dict()
# create an instance of AuthorizationAttributes from a dict
authorization_attributes_from_dict = AuthorizationAttributes.from_dict(authorization_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


