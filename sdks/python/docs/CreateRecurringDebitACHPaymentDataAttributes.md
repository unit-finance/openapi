# CreateRecurringDebitACHPaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on the statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**schedule** | [**CreateScheduleType**](CreateScheduleType.md) | The schedule details of the recurring payment. All times must be in the future. | 
**verify_counterparty_balance** | **bool** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 

## Example

```python
from unit_finance_sdk.models.create_recurring_debit_ach_payment_data_attributes import CreateRecurringDebitACHPaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecurringDebitACHPaymentDataAttributes from a JSON string
create_recurring_debit_ach_payment_data_attributes_instance = CreateRecurringDebitACHPaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateRecurringDebitACHPaymentDataAttributes.to_json())

# convert the object into a dict
create_recurring_debit_ach_payment_data_attributes_dict = create_recurring_debit_ach_payment_data_attributes_instance.to_dict()
# create an instance of CreateRecurringDebitACHPaymentDataAttributes from a dict
create_recurring_debit_ach_payment_data_attributes_from_dict = CreateRecurringDebitACHPaymentDataAttributes.from_dict(create_recurring_debit_ach_payment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


