# CreateBookRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Repayment description (maximum of 80 characters), this will show up on statement of the counterparty. | 
**amount** | **int** | The amount (cents) to repay. | 
**transaction_summary_override** | **str** | If this field is populated, its contents will be returned as the bookTransaction&#39;s summary field (maximum of 100 characters). | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_book_repayment_data_attributes import CreateBookRepaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBookRepaymentDataAttributes from a JSON string
create_book_repayment_data_attributes_instance = CreateBookRepaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBookRepaymentDataAttributes.to_json())

# convert the object into a dict
create_book_repayment_data_attributes_dict = create_book_repayment_data_attributes_instance.to_dict()
# create an instance of CreateBookRepaymentDataAttributes from a dict
create_book_repayment_data_attributes_from_dict = CreateBookRepaymentDataAttributes.from_dict(create_book_repayment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


