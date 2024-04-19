"""migrations

Revision ID: 60cd3260643a
Revises: 4fb0d83292e3
Create Date: 2024-04-19 00:20:51.476479

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError


# revision identifiers, used by Alembic.
revision = '60cd3260643a'
down_revision = '4fb0d83292e3'
branch_labels = None
depends_on = None



def upgrade():
    # Step 1: Verify if the column exists and update existing records if needed
    connection = op.get_bind()
    connection.execute(
        sa.text("UPDATE users SET password = 'temporary_password' WHERE password IS NULL")
    )
    
    # Step 2: Create a new temporary table with the same schema but password column set to NOT NULL
    op.create_table(
        'users_temp',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('name', sa.String),
        sa.Column('password', sa.String, nullable=False),  # Set the password column to NOT NULL
        # Add other columns as needed
    )

    # Step 3: Copy data from the old 'users' table to the new 'users_temp' table
    connection.execute(
        sa.text("INSERT INTO users_temp (id, name, password) SELECT id, name, password FROM users")
    )

    # Step 4: Drop the old 'users' table
    op.drop_table('users')

    # Step 5: Rename 'users_temp' to 'users'
    op.rename_table('users_temp', 'users')

def downgrade():
    # In case of downgrade, reverse the NOT NULL constraint if needed
    op.alter_column('users', 'password', nullable=True)