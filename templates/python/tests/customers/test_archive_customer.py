import pytest

from helpers.api import build_customers_api, requires_token, unwrap
from helpers.fixtures import build_archive_customer_request
from helpers.shared_account import create_individual_customer_id


# Skipped: blocked on an upstream spec fix. ArchiveCustomerData.type is the
# constant "customerArchive", but the sandbox only accepts "archiveCustomer" and
# rejects the request with a 400 (source pointer /data/type) before it succeeds.
# Re-enable (remove the skip mark) once the spec's discriminator constant is
# corrected.
@pytest.mark.skip(
    reason="Blocked on upstream spec fix: ArchiveCustomerData.type must be 'archiveCustomer'."
)
@requires_token
def test_archives_a_dedicated_individual_customer():
    api = build_customers_api()
    # Archive a fresh, account-less individual customer so the shared business
    # customer stays usable for the other suites.
    customer_id = create_individual_customer_id()
    res = api.archive_customer_with_http_info(
        customer_id,
        build_archive_customer_request(),
    )

    assert res.status_code in (200, 201)
    data = unwrap(res.data.data)
    assert data.id == customer_id
    assert isinstance(data.type, str)
    assert data.attributes is not None
