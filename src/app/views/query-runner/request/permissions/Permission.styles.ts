import { FontSizes, FontWeights, ITheme, } from '@uifabric/styling';

export const permissionStyles = (theme: ITheme) => {
    return {
        consented: {
            fontSize: FontSizes.small,
            fontStyle: 'italic'
        },
        consentDescription: {
            root: { display: 'inline-block' }
        },
        permissionsTab: {
            padding: 10,
            maxHeight: '350px',
            minHeight: '300px',
            overflowY: 'auto',
            overflowX: 'auto'
        },
        permissionsTable: {
            marginBottom: 120
        },
        permissionLabel: {
            fontWeight: FontWeights.bold,
            marginBottom: 5
        }
    };
};