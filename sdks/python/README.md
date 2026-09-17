# Unit Python SDK

Python SDK for the Unit banking API.

## Requirements.

Python 3.10+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import unit_finance_sdk
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import unit_finance_sdk
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import unit_finance_sdk
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)


# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.AccountsApi(api_client)
    account_id = 'account_id_example' # str | 
    add_account_owners_request = unit_finance_sdk.AddAccountOwnersRequest() # AddAccountOwnersRequest | 

    try:
        # Add account owners
        api_response = api_instance.add_account_owners(account_id, add_account_owners_request)
        print("The response of AccountsApi->add_account_owners:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AccountsApi->add_account_owners: %s\n" % e)

```

