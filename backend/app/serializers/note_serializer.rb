class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :updated_at, :created_at

  belongs_to :user
end
