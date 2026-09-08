# PurchaseTransactionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date the transaction was created. Common to all transaction types. | 
**direction** | **str** | The direction in which the funds flow. Common to all transaction types. | 
**amount** | **int** | The amount (cents) of the transaction. Common to all transaction types. | 
**balance** | **int** | The account balance (cents) after the transaction. Common to all transaction types. | 
**summary** | **str** | Summary of the transaction. Common to all transaction types. | 
**card_last4_digits** | **str** | The last 4 digits of the debit card involved in the transaction. | 
**coordinates** | [**CoordinatesType**](CoordinatesType.md) | Coordinates (latitude, longitude) of where the purchase took place. | [optional] 
**recurring** | **bool** | Indicates whether the transaction is recurring. | 
**interchange** | **str** | The interchange share for this transaction. Calculated at the end of each day, see the transaction.updated event. | [optional] 
**gross_interchange** | **str** | The gross interchange share for this transaction. | [optional] 
**ecommerce** | **bool** | Indicates whether the transaction was created over an electronic network (primarily the internet). | 
**card_present** | **bool** | Indicates whether the card was present when the transaction was created. | 
**payment_method** | **str** | The payment method used, one of: Manual, Swipe, Contactless, ChipAndPin, Stored, Other. | [optional] 
**digital_wallet** | **str** | The type of digital wallet used, one of: Google, Apple, Other. | [optional] 
**card_network** | **str** | The card network used, one of: Visa, Interlink, Accel, Allpoint, Other. | [optional] 
**tags** | **Dict[str, object]** | See Tags. Inherited from the authorization request tags (see Tag Inheritance). | 
**cash_withdrawal_amount** | **int** | Cash withdrawal amount | [optional] 
**rich_merchant_data** | [**RichMerchantDataType**](RichMerchantDataType.md) | Full merchant information. See Transaction Enrichment. | [optional] 
**currency_conversion** | [**CurrencyConversionType**](CurrencyConversionType.md) | When original currency for transaction is not USD. | [optional] 
**card_decision_source** | **str** | Who made the final card authorization decision. See Understanding authorization decisions. One of Org, Unit, Network, TimeoutApprove, TimeoutDecline, DefaultApprove, InternalError, IssuerStandIn. | [optional] 
**merchant** | [**PurchaseTransactionAttributesMerchant**](PurchaseTransactionAttributesMerchant.md) |  | [optional] 
**card_verification_data** | [**CardTransactionAttributesCardVerificationData**](CardTransactionAttributesCardVerificationData.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.purchase_transaction_attributes import PurchaseTransactionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseTransactionAttributes from a JSON string
purchase_transaction_attributes_instance = PurchaseTransactionAttributes.from_json(json)
# print the JSON string representation of the object
print(PurchaseTransactionAttributes.to_json())

# convert the object into a dict
purchase_transaction_attributes_dict = purchase_transaction_attributes_instance.to_dict()
# create an instance of PurchaseTransactionAttributes from a dict
purchase_transaction_attributes_from_dict = PurchaseTransactionAttributes.from_dict(purchase_transaction_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


