"""Lending-program lookup helpers, the analogue of Node's ``helpers/lendingPrograms.ts``."""

from typing import Optional

from .api import build_lending_programs_api, unwrap


def get_first_lending_program_id_or_skip() -> Optional[str]:
    """The id of an existing lending program, or ``None`` when the org has none.

    Lending programs are provisioned by Unit, not through the API — this
    surface exposes only list and the two reads — so the by-id operations have
    nothing to read when the list comes back empty.
    """
    res = build_lending_programs_api().list_lending_programs_with_http_info(
        page_limit="1"
    )
    items = res.data.data or []
    if not items:
        print(
            "No lending programs exist on this sandbox org and the SDK has no "
            "create-lending-program operation; skipping."
        )
        return None
    return unwrap(items[0]).id
