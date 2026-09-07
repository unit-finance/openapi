# CreateBulkPayment201ResponseDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulk_id** | **str** | Identifier of the bulk request, used to track the payments created by it. | [optional] 

## Example

```python
from unit_finance_sdk.models.create_bulk_payment201_response_data_attributes import CreateBulkPayment201ResponseDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBulkPayment201ResponseDataAttributes from a JSON string
create_bulk_payment201_response_data_attributes_instance = CreateBulkPayment201ResponseDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateBulkPayment201ResponseDataAttributes.to_json())

# convert the object into a dict
create_bulk_payment201_response_data_attributes_dict = create_bulk_payment201_response_data_attributes_instance.to_dict()
# create an instance of CreateBulkPayment201ResponseDataAttributes from a dict
create_bulk_payment201_response_data_attributes_from_dict = CreateBulkPayment201ResponseDataAttributes.from_dict(create_bulk_payment201_response_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


