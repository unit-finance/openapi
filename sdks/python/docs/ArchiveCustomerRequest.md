# ArchiveCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ArchiveCustomerData**](ArchiveCustomerData.md) |  | 

## Example

```python
from unit_finance_sdk.models.archive_customer_request import ArchiveCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ArchiveCustomerRequest from a JSON string
archive_customer_request_instance = ArchiveCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(ArchiveCustomerRequest.to_json())

# convert the object into a dict
archive_customer_request_dict = archive_customer_request_instance.to_dict()
# create an instance of ArchiveCustomerRequest from a dict
archive_customer_request_from_dict = ArchiveCustomerRequest.from_dict(archive_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


