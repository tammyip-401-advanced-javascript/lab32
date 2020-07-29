import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './StoreActionAPI';

function Categories(props) {
    const { categories, getCategories } = props
    useEffect(() => {
        getCategories()
    }, [getCategories])

    let categoryHTML = [];

    if (categories) {
        for (let i = 0; i < categories.length; i++) {
            let category = categories[i];
            categoryHTML.push(
                <button
                    key={i}
                    onClick={() => {
                        props.setCurrentCategories({
                            type: 'SET_CURRENT_CATEGORY',
                            payload: category.name,
                        });
                    }}
                >
                    {category.displayName || category.name}
                </button>,
            );
        }
    }

    return (
        <div>
            <h3>Browse our Categories:</h3>
            {categoryHTML}
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories,
    currentCategory: state.reducer.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(actions.getCategories()),
    setCurrentCategories: (payload) => dispatch(actions.setCurrentCategories(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
