# CreateACHPaymentPlaidTokenDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | The amount (in cents). | 
**direction** | **str** | The direction in which the funds flow. | 
**description** | **str** | Payment description (maximum of 10 characters), also known as Company Entry Description, this will show up on statement of the counterparty. | 
**addenda** | **str** | Optional, additional payment description (maximum of 80 characters), not all institutions present that. | [optional] 
**idempotency_key** | **str** | Optional. See Idempotency. | [optional] 
**counterparty_name** | **str** | Optional. Name of the person or company that owns the counterparty bank account. | [optional] 
**plaid_processor_token** | **str** | See Create Plaid processor token API. | 
**tags** | **Dict[str, object]** | Optional. See Tags. Tags that will be copied to any transaction that this payment creates (see Tag Inheritance). | [optional] 
**verify_counterparty_balance** | **bool** | Optional, default is false. Verify the counterparty balance, if balance verification fails the payment will be rejected with reason set to CounterpartyInsufficientFunds. | [optional] 
**same_day** | **bool** | Optional, default is false. See Same Day ACH. | [optional] 
**sec_code** | **str** | Optional. See Use a custom SEC Code. | [optional] 
**clearing_days_override** | **int** | Optional. See Dynamic Clearing Period. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_ach_payment_plaid_token_data_attributes import CreateACHPaymentPlaidTokenDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateACHPaymentPlaidTokenDataAttributes from a JSON string
create_ach_payment_plaid_token_data_attributes_instance = CreateACHPaymentPlaidTokenDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateACHPaymentPlaidTokenDataAttributes.to_json())

# convert the object into a dict
create_ach_payment_plaid_token_data_attributes_dict = create_ach_payment_plaid_token_data_attributes_instance.to_dict()
# create an instance of CreateACHPaymentPlaidTokenDataAttributes from a dict
create_ach_payment_plaid_token_data_attributes_from_dict = CreateACHPaymentPlaidTokenDataAttributes.from_dict(create_ach_payment_plaid_token_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


