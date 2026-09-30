# CreateExternalRepaymentDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Repayment description (maximum of 80 characters). | 
**amount** | **int** | The amount (cents) to repay. | 
**tags** | **Dict[str, object]** | See Tags. | [optional] 
**idempotency_key** | **str** | See Idempotency. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_external_repayment_data_attributes import CreateExternalRepaymentDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateExternalRepaymentDataAttributes from a JSON string
create_external_repayment_data_attributes_instance = CreateExternalRepaymentDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateExternalRepaymentDataAttributes.to_json())

# convert the object into a dict
create_external_repayment_data_attributes_dict = create_external_repayment_data_attributes_instance.to_dict()
# create an instance of CreateExternalRepaymentDataAttributes from a dict
create_external_repayment_data_attributes_from_dict = CreateExternalRepaymentDataAttributes.from_dict(create_external_repayment_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


