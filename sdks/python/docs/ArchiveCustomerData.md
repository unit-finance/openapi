# ArchiveCustomerData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**ArchiveCustomerDataAttributes**](ArchiveCustomerDataAttributes.md) |  | 

## Example

```python
from unit_finance_sdk.models.archive_customer_data import ArchiveCustomerData

# TODO update the JSON string below
json = "{}"
# create an instance of ArchiveCustomerData from a JSON string
archive_customer_data_instance = ArchiveCustomerData.from_json(json)
# print the JSON string representation of the object
print(ArchiveCustomerData.to_json())

# convert the object into a dict
archive_customer_data_dict = archive_customer_data_instance.to_dict()
# create an instance of ArchiveCustomerData from a dict
archive_customer_data_from_dict = ArchiveCustomerData.from_dict(archive_customer_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


