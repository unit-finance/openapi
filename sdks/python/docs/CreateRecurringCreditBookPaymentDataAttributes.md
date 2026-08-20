# CreateRecurringCreditBookPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**description** | **str** | Payment description (maximum of 80 characters), this will show up on the statement of the counterparty. | 
**transaction_summary_override** | **str** | Optional. If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | [optional] 
**schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. | 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_recurring_credit_book_payment_data_attributes import CreateRecurringCreditBookPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringCreditBookPaymentDataAttributes from a JSON string
create_recurring_credit_book_payment_data_attributes_instance = CreateRecurringCreditBookPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringCreditBookPaymentDataAttributes.to_json())

# convert the object into a dict
create_recurring_credit_book_payment_data_attributes_dict = create_recurring_credit_book_payment_data_attributes_instance.to_dict()
# create an instance of CreateRecurringCreditBookPaymentDataAttributes from a dict
create_recurring_credit_book_payment_data_attributes_from_dict = CreateRecurringCreditBookPaymentDataAttributes.from_dict(create_recurring_credit_book_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


