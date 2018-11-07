import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileDropper extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        onDropped: PropTypes.func.isRequired,
        onDragEnter: PropTypes.func,
        onDragLeave: PropTypes.func,
    }

    static defaultProps = {
        onDragEnter: null,
        onDragLeave: null,
    }

    onDrop = (e) => {
        e.preventDefault();

        let files = [];
        const items = e.dataTransfer.items;
        if (items) {
            for(let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === 'file') {
                const file = item.getAsFile();
                files.push(file);
            }
            }
        }

        if (files.length > 0) {
            this.props.onDropped(files);
        }

    }
    
    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragEnter = (e) => {
        e.preventDefault();
        if (this.props.onDragEnter) {
            this.props.onDragEnter();
        }
    }

    onDragLeave = (e) => {
        e.preventDefault();
        if (this.props.onDragLeave) {
            this.props.onDragLeave();
        }
    }

    render() {
        return (
            <div
                style={{ display: 'inline-block' }}
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
            >
                {this.props.children}
            </div>
        );
    }

}

export default FileDropper;