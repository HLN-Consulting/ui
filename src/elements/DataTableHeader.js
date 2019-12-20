// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DataTableFilter } from './../components/DataTableFilter';

const DataTableMasthead = styled(({ display, ...rest }) => <div {...rest} />)`
    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    visibility: ${(props) => (props.display ? 'visible' : 'hidden')};
`;

const TableLabel = styled.h3`
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.337rem;
    font-weight: 600;
    line-height: 2rem;
    margin: 1.337rem 0;
`;

export const DataTableHeader = ({
    displayLabel,
    globalFilterContext,
    id,
    onFilterChange,
    label,
    ...props
}) => {
    return (
        <DataTableMasthead display={displayLabel}>
            <TableLabel id={id}>{label}</TableLabel>
            {typeof onFilterChange === 'function' && (
                <DataTableFilter
                    onChange={(e) =>
                        onFilterChange(e.target.value || undefined)
                    }
                    value={globalFilterContext || ``}
                />
            )}
        </DataTableMasthead>
    );
};

DataTableHeader.propTypes = {
    displayLabel: PropTypes.bool,
    id: PropTypes.string,
    onFilterChange: PropTypes.func,
    label: PropTypes.string,
    globalFilterContext: PropTypes.string
};

DataTableHeader.defaultProps = {
    globalFilterContext: ``
};